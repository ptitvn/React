import { useTheme } from './ThemeContext';

const Content = () => {
  const { theme } = useTheme();

  return (
    <main>
      <p>Đây là phần nội dung chính của ứng dụng.</p>
      <p>Theme hiện tại: {theme}</p>
    </main>
  );
};

export default Content;