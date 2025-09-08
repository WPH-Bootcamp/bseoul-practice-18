// exhaustive check 
// (buat mastiin tidak ada case yang terlewat)

const AlertLevel = {
    Low: "low",
    Medium: "medium",
    High: "high",
} as const;

// union type otomatis: "low" | "medium" | "high"
type AlertLevel = (typeof AlertLevel)[keyof typeof AlertLevel];
 

//  exhaustive check ngecek nilai dari case udah lengkap atau belum?
function getALertColor(level: AlertLevel): string {
    switch (level) {
        case "low":
          return "Hijau"
        case "medium":
          return "Kuning"
        case "high":
          return "Merah"
        default:
            const _exhaustive: never = level;
            return _exhaustive

    }
}

console.log(getALertColor("low"))
console.log(getALertColor("merah"))

