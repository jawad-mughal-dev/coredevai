import { TrendingUp, Users, Code2, Award } from "lucide-react";

const stats = [
  { icon: Code2, value: "50+", label: "Projects Delivered", color: "text-blue-500" },
  { icon: Users, value: "30+", label: "Happy Clients", color: "text-green-500" },
  { icon: TrendingUp, value: "98%", label: "Client Satisfaction", color: "text-purple-500" },
  { icon: Award, value: "3+", label: "Years Experience", color: "text-orange-500" },
];

export function StatsSection() {
  return (
    <section className="py-16 border-y border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label, color }) => (
            <div key={label} className="text-center">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary mb-3 ${color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{value}</div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
