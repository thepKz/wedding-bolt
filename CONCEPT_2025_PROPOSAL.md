# Concept Thiệp Mời 2025: "Bản Đồ Tình Yêu"

## 1. Triết lý thiết kế

- **Khám Phá Tự Do (Non-linear Exploration):** Thay vì một câu chuyện kể theo thứ tự, khách mời sẽ tự do khám phá các cột mốc tình yêu trên một bản đồ tương tác.
- **Trải Nghiệm Cá Nhân (Personal Discovery):** Mỗi điểm đến trên bản đồ là một "cửa sổ ký ức", hé lộ một phần câu chuyện theo cách riêng mà khách mời lựa chọn.
- **Phần Thưởng Bất Ngờ (Rewarding Interaction):** Việc khám phá sẽ dẫn đến phần thưởng cuối cùng – tấm thiệp mời hoàn chỉnh, được "mở khóa" sau khi hành trình khám phá kết thúc.

---

## 2. Luồng trải nghiệm người dùng (User Flow)

Hành trình của khách mời sẽ xoay quanh một bản đồ nghệ thuật, đầy tính tương tác:

1.  **Màn Hình Chào Mừng (The Compass):**
    - **UI:** Mở đầu là một chiếc la bàn hoạt hình đẹp mắt, kim chỉ nam hướng về một nút bấm "Bắt đầu hành trình". Tên "Minh & Hương" và tagline "Mỗi điểm dừng là một kỷ niệm".
    - **UX:** Gợi cảm giác phiêu lưu, mời gọi khách mời bắt đầu cuộc khám phá.

2.  **Bản Đồ Tương Tác (The Interactive Map):**
    - **UI:** Giao diện chính là một bản đồ được vẽ tay nghệ thuật (không phải Google Maps). Các địa điểm quan trọng (quán cafe hẹn đầu, nơi cầu hôn,...) được đánh dấu bằng các icon độc đáo. Khách mời có thể kéo, thu phóng bản đồ.
    - **UX:** Trao toàn quyền kiểm soát cho khách mời. Họ có thể chọn bất kỳ điểm đến nào họ tò mò trước.

3.  **Cửa Sổ Ký Ức (The Memory Window):**
    - **UI:** Khi click vào một điểm đánh dấu, một cửa sổ modal (hoặc panel bên cạnh) sẽ hiện ra. Bên trong là một tấm ảnh đẹp, một đoạn kể chuyện ngắn, hoặc một video ngắn về kỷ niệm tại nơi đó.
    - **UX:** Mỗi cửa sổ là một câu chuyện độc lập, giàu cảm xúc. Việc không theo thứ tự giúp mỗi khách mời có một trải nghiệm riêng biệt.

4.  **Lời Mời Được "Mở Khóa" (The Unlocked Invitation):**
    - **UI:** Khi khách mời khám phá hết các địa điểm, các "mảnh ghép" ký ức sẽ bay về và ráp lại thành một tấm thiệp mời hoàn chỉnh ngay trên màn hình.
    - **UX:** Tạo ra một khoảnh khắc "wow" đầy ý nghĩa. Tấm thiệp không chỉ là một thông báo, mà là thành quả của cả một hành trình.

5.  **Trạm Dừng Cuối: Lời Mời & RSVP (Final Destination: The Invitation & RSVP):**
    - **UI:** Tấm thiệp hoàn chỉnh hiển thị đầy đủ thông tin trang trọng: ngày, giờ, địa điểm. Ngay bên dưới là form RSVP để khách mời xác nhận tham dự và gửi lời chúc.
    - **UX:** Kết thúc hành trình khám phá bằng lời mời chính thức và tạo cơ hội để khách mời tương tác.

---

## 3. Kế hoạch thực thi kỹ thuật

Kế hoạch này đòi hỏi một cấu trúc mới, tập trung vào tương tác:

1.  **Dọn dẹp (nếu cần):**
    - Đảm bảo các components cũ (`WelcomeScreen`, `PhotoAlbum`, `WeddingStory`) đã được xóa.
    - Xóa `REWORK_UI_PLAN.md` cũ nếu còn.

2.  **Cấu trúc lại `App.tsx`:**
    - `App.tsx` sẽ quản lý trạng thái các địa điểm đã được khám phá (`visitedLocations`) và điều phối việc hiển thị bản đồ hoặc tấm thiệp hoàn chỉnh.

3.  **Xây dựng các Components mới:**
    - `src/sections/MapSection.tsx`: Chứa bản đồ tương tác và các điểm đánh dấu.
    - `src/components/MemoryModal.tsx`: Cửa sổ hiển thị thông tin kỷ niệm.
    - `src/sections/InvitationSection.tsx`: Tấm thiệp mời hoàn chỉnh sau khi được "mở khóa".
    - `src/sections/RsvpSection.tsx`: Form xác nhận tham dự.

4.  **Công nghệ & Animation:**
    - Sử dụng `framer-motion` cho các hiệu ứng chuyển động (la bàn, modal, hiệu ứng ráp mảnh ghép).
    - Cân nhắc thư viện `react-zoom-pan-pinch` để xử lý tương tác kéo/thu phóng bản đồ một cách mượt mà.

---

## 4. Phê duyệt

Concept "Bản Đồ Tình Yêu" mang đến một trải nghiệm độc đáo, giàu tính tương tác và đậm dấu ấn cá nhân. Đây là một hướng đi mới mẻ, sẵn sàng để bắt đầu triển khai. 