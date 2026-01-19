import { NextResponse } from "next/server"
import { Resend } from "resend"
import { contactSchema, industryOptions, companySizeOptions, serviceOptions } from "@/lib/validations/contact"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const result = contactSchema.safeParse(body)
    
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors
      return NextResponse.json(
        { success: false, message: "입력값을 확인해주세요", errors },
        { status: 400 }
      )
    }

    const data = result.data
    
    const industryLabel = industryOptions.find(opt => opt.value === data.industry)?.label || data.industry
    const companySizeLabel = companySizeOptions.find(opt => opt.value === data.companySize)?.label || data.companySize
    const serviceLabels = data.services
      .map(s => serviceOptions.find(opt => opt.value === s)?.label || s)
      .join(", ")

    const emailSubject = `[AX-Consulting] ${serviceLabels} 문의 - ${data.companyName}`

    const emailHtml = `
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <tr>
            <td style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); padding: 32px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700;">AX-Consulting</h1>
              <p style="margin: 8px 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">새로운 상담 요청이 도착했습니다</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom: 24px;">
                    <h2 style="margin: 0 0 16px; color: #1f2937; font-size: 18px; font-weight: 600; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">기업 정보</h2>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 120px;">회사명</td>
                        <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">${data.companyName}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">업종</td>
                        <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">${industryLabel}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">직원 수</td>
                        <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">${companySizeLabel}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 24px;">
                    <h2 style="margin: 0 0 16px; color: #1f2937; font-size: 18px; font-weight: 600; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">담당자 정보</h2>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 120px;">담당자명</td>
                        <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">${data.contactName}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">이메일</td>
                        <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">
                          <a href="mailto:${data.email}" style="color: #2563eb; text-decoration: none;">${data.email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">연락처</td>
                        <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 500;">
                          <a href="tel:${data.phone.replace(/-/g, '')}" style="color: #2563eb; text-decoration: none;">${data.phone}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 24px;">
                    <h2 style="margin: 0 0 16px; color: #1f2937; font-size: 18px; font-weight: 600; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">관심 서비스</h2>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                      ${data.services.map(s => {
                        const label = serviceOptions.find(opt => opt.value === s)?.label || s
                        return `<span style="display: inline-block; background-color: #eff6ff; color: #2563eb; padding: 6px 12px; border-radius: 16px; font-size: 13px; font-weight: 500; margin: 4px 4px 4px 0;">${label}</span>`
                      }).join('')}
                    </div>
                  </td>
                </tr>
                ${data.message ? `
                <tr>
                  <td>
                    <h2 style="margin: 0 0 16px; color: #1f2937; font-size: 18px; font-weight: 600; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">문의 내용</h2>
                    <div style="background-color: #f9fafb; border-radius: 8px; padding: 16px; color: #374151; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.message}</div>
                  </td>
                </tr>
                ` : ''}
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color: #f9fafb; padding: 20px 32px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #6b7280; font-size: 12px;">이 이메일은 AX-Consulting 웹사이트의 상담 신청 폼에서 발송되었습니다.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`

    const { error } = await resend.emails.send({
      from: "AX-Consulting <onboarding@resend.dev>",
      to: ["axconkr@gmail.com"],
      replyTo: data.email,
      subject: emailSubject,
      html: emailHtml,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { success: false, message: "이메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요." },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: "상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다." },
      { status: 200 }
    )

  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { success: false, message: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요." },
      { status: 500 }
    )
  }
}
