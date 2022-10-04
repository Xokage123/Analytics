export interface AnalyticItem {
  color: string;
  icon: {
    src: string;
    options: {
      width: number;
      height: number;
      alt: string;
    };
  };
  title: string;
  amount: number;
  summa?: string;
}
