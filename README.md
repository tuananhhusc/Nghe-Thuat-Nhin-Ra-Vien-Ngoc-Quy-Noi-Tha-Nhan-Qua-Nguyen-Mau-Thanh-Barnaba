# Báo Cáo Phân Tích Chuyên Sâu: Nguyên Mẫu Thánh Barnaba (Long-read Academic Article)

Trang web định dạng bài viết dài (long-read article) trình bày báo cáo nghiên cứu đa ngành chuyên sâu giải mã nguyên mẫu Thánh Barnaba (Barnabas), người được cộng đoàn sơ khai vinh danh là "Con của sự an ủi" (*Paraklēsis*). Giao diện là sự giao thoa tinh tế giữa phong cách **Học thuật Nghiên cứu (Academic)** và **Thẩm mỹ Công giáo (Catholic/Sacred UI)**.

Dự án được xây dựng trên nền tảng **Next.js 15+ (App Router)** và **Tailwind CSS v4**.

---

## 🌟 Tính Năng Nổi Bật

### 1. Thẩm Mỹ Thánh Thiêng & Học Thuật (Sacred/Academic UI)
- **Hệ màu Sang trọng:** Sử dụng tông nền giấy cổ (Parchment), chữ than đá (Charcoal) thân thiện với mắt, kết hợp sắc đỏ mận bordeaux thánh hiến (Burgundy) và màu vàng kim (Gold) vinh hiển.
- **Typography Cổ điển:** Kết hợp font chữ tiêu đề có chân cổ điển `Playfair Display` (Playfair) và font chữ nội dung dễ đọc `Merriweather` (Georgia-style), mang lại cảm giác trang nghiêm của một bản thảo nghiên cứu.
- **Biểu tượng trang trí:** Tích hợp họa tiết Thánh Giá La Tinh và các hoa văn phân đoạn cổ kính (`❖`, `✦`, `☩`).
- **Drop Cap (Chữ khởi đầu lớn):** Định dạng chữ cái lớn nghệ thuật ở đoạn mở đầu mang phong cách bản thảo viết tay Trung cổ.

### 2. Trải Nghiệm Độc Giả Tối Ưu (Long-read UX)
- **Theme Sáng/Tối (Dark Mode):** Chuyển đổi mượt mà giữa chế độ màu giấy cổ (Light) và chế độ gỗ gụ/đá trầm (Dark). Nút đổi theme được thiết kế nổi phủ kính (glassmorphism) tinh tế.
- **Mục Lục Thông Minh (Scroll Spy TOC):**
  - **Desktop:** Sidebar Mục lục hiển thị song song bên trái bài viết, tự động tô sáng (active) phần tiêu đề độc giả đang đọc nhờ IntersectionObserver. Hỗ trợ tự động tô sáng mục cuối cùng khi cuộn đến đáy trang.
  - **Mobile:** Nút FAB mở Mục lục dạng ngăn kéo (drawer) trượt từ bên trái với các touch target (khoảng cách chạm) lớn dễ bấm bằng ngón cái.
- **Thời gian đọc ước tính:** Tự động tính toán tổng số từ của bài viết để hiển thị thời gian đọc ước tính (~25 phút đọc) ngay tại Hero Header.
- **Sao chép liên kết mục (Anchor Copy):** Mỗi tiêu đề (H2, H3) đều tích hợp nút copy link trực tiếp. Trên di động, nút copy luôn hiện mờ (`opacity-40`) để độc giả nhận biết và chạm, thay vì chỉ hiện khi hover như trên desktop.
- **Cuộn lên đầu trang (Back to Top):** Nút cuộn nhanh xuất hiện mượt mà khi cuộn trang quá 500px.

### 3. Tối Ưu Hóa Tìm Kiếm & Chia Sẻ (SEO & Open Graph)
- **Open Graph & Twitter Cards:** Cấu hình metadata đầy đủ, liên kết ảnh bìa học thuật chuẩn kích thước 1200x630px được lưu trữ tại `public/og-image.png`.
- **Dữ liệu có cấu trúc JSON-LD:** Nhúng schema chuẩn `ScholarlyArticle` (Báo cáo học thuật) giúp Google Index bài viết một cách chuyên nghiệp. Đã cố định ngày tháng tĩnh để triệt tiêu lỗi Hydration mismatch.
- **Thân thiện di động:** Điểm số tương tác di động vượt trội, các nút bấm nổi được phủ kính mờ nhẹ nhàng để không cản trở nội dung đọc.

### 4. Tối Ưu In Ấn (Print-Friendly CSS)
- Tích hợp riêng biệt cấu hình `@media print` trong CSS. Khi nhấn `Ctrl + P` (hoặc xuất PDF), toàn bộ các thanh cuộn, nút bấm nổi, sidebar mục lục, hiệu ứng màu nền và ảnh trang trí không cần thiết sẽ tự động ẩn đi. Bài viết sẽ định dạng lại font chữ đen, nền trắng, căn lề văn bản chuẩn mực để in ấn hoặc lưu PDF chuyên nghiệp.

---

## 🛠️ Công Nghệ & Thư Viện Sử Dụng

- **Core Framework:** Next.js (App Router, Server Components).
- **Styling:** Tailwind CSS v4 (sử dụng CSS variables kế thừa mượt mà giữa các chế độ sáng/tối).
- **Markdown Parser:** `react-markdown` kết hợp plugin `remark-gfm` (để hiển thị các bảng phân tích đa ngành chuẩn APA).
- **Typography Plugin:** `@tailwindcss/typography` (áp dụng lớp `prose prose-sacred` tùy biến màu sắc).
- **Animations:** `framer-motion` (hiệu ứng Fade-in Up mượt mà khi cuộn trang).
- **Icons:** `lucide-react`.
- **Theme Management:** `next-themes`.

---

## 📁 Cấu Trúc Thư Mục Dự Án

```text
├── public/                 # Ảnh tĩnh, favicon và ảnh chia sẻ Open Graph (og-image.png)
├── src/
│   ├── app/
│   │   ├── globals.css     # Định nghĩa biến màu sắc, typography và print CSS
│   │   ├── layout.tsx      # Cấu hình Fonts, SEO Metadata và Schema JSON-LD
│   │   └── page.tsx        # Server Component đọc file MD và điều hướng bài viết
│   ├── components/
│   │   ├── ui/
│   │   │   ├── CrossIcon.tsx        # Icon Thánh Giá trang trí SVG
│   │   │   └── OrnamentDivider.tsx  # Thanh chia đoạn hoa văn trang trí
│   │   ├── AnimatedSection.tsx      # Component bao bọc scroll-fade-in
│   │   ├── BackToTop.tsx            # Nút cuộn lên đầu trang (glassmorphism)
│   │   ├── CopyLinkButton.tsx       # Nút sao chép liên kết tiêu đề nhanh
│   │   ├── ScrollProgress.tsx       # Thanh tiến trình đọc ở đỉnh trang
│   │   ├── ThemeProvider.tsx        # Nhà cung cấp cấu hình sáng/tối
│   │   ├── ThemeToggle.tsx          # Nút bật tắt chế độ tối (glassmorphic)
│   │   └── TocWrapper.tsx           # Thanh mục lục Sidebar (Desktop & Mobile Drawer)
│   └── content/
│       ├── barnaba.md      # Nội dung bài nghiên cứu bằng định dạng Markdown
│       └── data.ts         # Danh mục trích dẫn tham khảo, danh mục mục lục tĩnh
├── package.json
└── tsconfig.json
```

---

## 🚀 Hướng Dẫn Vận Hành Cục Bộ

### 1. Cài đặt các thư viện phụ thuộc:
```bash
npm install
```

### 2. Khởi chạy máy chủ thử nghiệm (Development Mode):
```bash
npm run dev
```
Truy cập vào trang web tại địa chỉ: [http://localhost:3000](http://localhost:3000)

### 3. Kiểm tra chất lượng mã nguồn & Quy tắc lập trình (ESLint):
```bash
npm run lint
```

### 4. Đóng gói mã nguồn tĩnh phục vụ Production:
```bash
npm run build
```

---

## ⛪ Quy Chuẩn Ngôn Ngữ Phụ Phụng Vụ / Công Giáo

Văn bản và mã nguồn của dự án được biên soạn và chuẩn hóa nghiêm ngặt theo bản dịch Phụng Vụ Công Giáo chính thống tại Việt Nam:
- Sử dụng các thuật ngữ như **Tông đồ** (không dùng *Sứ đồ*), **Môn đệ** (không dùng *Môn đồ*), **Ân sủng** (không dùng *Ân điển*), **Chúa Thánh Thần** (không dùng *Đức Thánh Linh*), **Thiên Chúa** (không dùng *Đức Chúa Trời*), **Hoán cải / Sám hối** (không dùng *Ăn năn*), và **Tín hữu** (không dùng *Tín đồ*).
- Các tên nhân vật lịch sử và địa danh Kinh Thánh được viết liền không gạch nối theo quy chuẩn Công giáo: **Phaolô**, **Gioan Máccô**, **Têphanô**, **Timôthê**, **Giêrusalem**, **Antiokia** (thay vì các từ gạch nối của Tin Lành như *Phao-lô*, *Giăng Mác*, *Ê-tiên*, *Giê-ru-sa-lem*, *An-ti-ốt*).
- Nghiêm cấm sử dụng các dấu gạch ngang dài dạng en-dash (`–`) hoặc em-dash (`—`) trong mã nguồn và dữ liệu văn bản của dự án để đảm bảo tính đồng nhất hiển thị.
