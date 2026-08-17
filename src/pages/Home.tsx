import { Link, Navigate } from "react-router-dom";
import {
  Zap,
  Target,
  Calendar,
  ArrowRight,
  Sparkles,
  Clock,
  CheckCircle2,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { useAuth } from "../context/AuthContext";

const features = [
  {
    icon: Sparkles,
    title: "Планы на базе ИИ",
    description:
      "Персональная программа тренировок с учётом ваших целей, текущей формы и свободного времени.",
  },
  {
    icon: Target,
    title: "Фокус на результат",
    description:
      "Набор массы, сброс веса или рост силовых — ИИ оптимизирует нагрузку под любую задачу.",
  },
  {
    icon: Calendar,
    title: "Гибкий график",
    description:
      "Программа подстроится под ваш ритм жизни. Тренируйтесь от 2 до 6 дней в неделю.",
  },
  {
    icon: Clock,
    title: "Экономия времени",
    description:
      "Каждое упражнение и сет выстроены так, чтобы выжимать максимум из каждого занятия.",
  },
];

const stats = [
  { value: "10k+", label: "Активных атлетов" },
  { value: "98%", label: "Точность подбора" },
  { value: "24/7", label: "Адаптация плана" },
];

export default function Home() {
  const { user, isLoading } = useAuth();

  if (!isLoading && user) {
    return <Navigate to="/profile" replace />;
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] overflow-hidden">
      <section className="relative pt-32 pb-24 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-[var(--color-accent)]/15 via-[var(--color-accent)]/5 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--color-accent)]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-card)]/80 backdrop-blur-md border border-[var(--color-border)] shadow-sm mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-[var(--color-accent)] animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-[var(--color-muted)]">
              Умный фитнес-помощник нового поколения
            </span>
          </div>

          {/* Заголовок */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.15]">
            Ваш идеальный план <br className="hidden sm:inline" />
            тренировок <span className="bg-gradient-to-r from-[var(--color-accent)] to-emerald-400 bg-clip-text text-transparent">за пару секунд</span>
          </h1>

          {/* Описание */}
          <p className="text-lg sm:text-xl text-[var(--color-muted)] max-w-2xl mx-auto mb-10 leading-relaxed">
            Хватит гадать в зале. Получите персональную программу тренировок от ИИ, 
            спроектированную под ваши цели, опыт и график.
          </p>

          {/* Кнопки */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/auth/sign-up" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto gap-2 text-base px-8 py-6 rounded-xl shadow-lg shadow-[var(--color-accent)]/20 hover:shadow-xl hover:shadow-[var(--color-accent)]/30 transition-all">
                Создать план бесплатно
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/auth/sign-in" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto text-base px-8 py-6 rounded-xl border border-[var(--color-border)] hover:bg-[var(--color-card)] transition-all">
                Войти в аккаунт
              </Button>
            </Link>
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-8 border-t border-[var(--color-border)]/60">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-accent)]">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-[var(--color-muted)] mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
              Почему именно <span className="text-[var(--color-accent)]">GymAI</span>?
            </h2>
            <p className="text-[var(--color-muted)] text-base sm:text-lg max-w-2xl mx-auto">
              Объединяем передовые спортивные методики и возможности искусственного интеллекта.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card
                key={feature.title}
                variant="bordered"
                className="relative p-6 rounded-2xl bg-[var(--color-card)]/50 backdrop-blur-sm border border-[var(--color-border)] hover:border-[var(--color-accent)]/60 hover:shadow-xl hover:shadow-[var(--color-accent)]/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center mb-5 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-[var(--color-accent)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-lg mb-2 tracking-tight">{feature.title}</h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Призыв к действию (CTA) */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[var(--color-card)] via-[var(--color-card)]/80 to-[var(--color-accent)]/10 border border-[var(--color-border)] text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Готовы изменить свой подход к тренировкам?
            </h2>
            <p className="text-[var(--color-muted)] max-w-xl mx-auto mb-8 text-base sm:text-lg">
              Заполните короткую анкету и получите ваш индивидуальный план тренировок уже через 1 минуту.
            </p>
            <Link to="/auth/sign-up">
              <Button size="lg" className="gap-2 px-8 py-6 text-base rounded-xl">
                Начать прямо сейчас
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}