export const metadata = {
  title: "EXORA — Экспорт авто из Кореи",
  description: "Каталог, расчёт стоимости и полное сопровождение под ключ",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head />
      <body>{children}</body>
    </html>
  );
}
