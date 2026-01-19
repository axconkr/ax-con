'use client';

import { motion } from 'framer-motion';
import { Clock, HelpCircle, Calculator } from 'lucide-react';

const painPoints = [
  {
    icon: Clock,
    title: "반복 업무에 시간 낭비",
    description: "엑셀 정리, 데이터 입력, 보고서 작성에 하루가 다 갑니다",
    delay: 0.1,
  },
  {
    icon: HelpCircle,
    title: "AI 도입 방법을 모름",
    description: "어디서 시작해야 할지, 무슨 도구를 써야 할지 막막합니다",
    delay: 0.2,
  },
  {
    icon: Calculator,
    title: "비용 대비 효과 불확실",
    description: "투자할 만한 가치가 있는지 판단이 어렵습니다",
    delay: 0.3,
  },
];

export function PainPoints() {
  return (
    <section className="py-32 bg-gray-50/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] as const }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            이런 문제를 해결합니다
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: point.delay,
                ease: [0.33, 1, 0.68, 1] as const 
              }}
              className="group flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-gray-100 p-3 text-gray-500 transition-colors duration-300">
                <point.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 text-xl font-medium text-gray-900">
                {point.title}
              </h3>
              <p className="max-w-xs text-base leading-relaxed text-gray-500 md:max-w-none">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PainPoints;
