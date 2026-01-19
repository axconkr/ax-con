'use client';

import { motion } from 'framer-motion';
import { Clock, HelpCircle, Calculator } from 'lucide-react';

const painPoints = [
  {
    icon: Clock,
    title: "반복 업무에 시간 낭비",
    description: "엑셀 정리, 데이터 입력, 보고서 작성에 하루가 다 갑니다",
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    icon: HelpCircle,
    title: "AI 도입 방법을 모름",
    description: "어디서 시작해야 할지, 무슨 도구를 써야 할지 막막합니다",
    color: "from-amber-500 to-yellow-500",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-500",
  },
  {
    icon: Calculator,
    title: "비용 대비 효과 불확실",
    description: "투자할 만한 가치가 있는지 판단이 어렵습니다",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500",
  },
];

export function PainPoints() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] as const }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
            Pain Points
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            이런 문제를 해결합니다
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 max-w-6xl mx-auto">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.33, 1, 0.68, 1] as const 
              }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 hover:-translate-y-1">
                <div className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r ${point.color}`} />
                
                <div className={`mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl ${point.bgColor}`}>
                  <point.icon className={`h-7 w-7 ${point.iconColor}`} strokeWidth={1.5} />
                </div>
                
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {point.title}
                </h3>
                
                <p className="text-base leading-relaxed text-muted-foreground">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PainPoints;
