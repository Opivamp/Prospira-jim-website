declare module "lucide-react" {
  import * as React from "react";

  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
    className?: string;
  }

  export type Icon = React.FC<LucideProps>;

  export const ArrowRight: Icon;
  export const ArrowUpRight: Icon;
  export const ChevronRight: Icon;
  export const ChevronDown: Icon;
  export const ChevronUp: Icon;
  export const ShieldCheck: Icon;
  export const Shield: Icon;
  export const Compass: Icon;
  export const Target: Icon;
  export const Activity: Icon;
  export const Flame: Icon;
  export const Check: Icon;
  export const CheckCircle: Icon;
  export const CheckCircle2: Icon;
  export const X: Icon;
  export const Clock: Icon;
  export const Calendar: Icon;
  export const Users: Icon;
  export const User: Icon;
  export const MapPin: Icon;
  export const Phone: Icon;
  export const Mail: Icon;
  export const Layers: Icon;
  export const Dumbbell: Icon;
  export const GitFork: Icon;
  export const Quote: Icon;
  export const Sparkles: Icon;
  export const Search: Icon;
  export const AlertCircle: Icon;
  export const HelpCircle: Icon;
  export const MessageSquare: Icon;
  export const Award: Icon;
  export const Loader2: Icon;
  export const Menu: Icon;
  export const Filter: Icon;
  export const Info: Icon;
  export const Sliders: Icon;

  const icons: { [key: string]: Icon };
  export default icons;
}
