"Thiệp mời vào tim anh" - Invitation to My Heart

🌟 Tổng quan ý tưởng:
Tạo một webapp tương tác đóng vai trò là tấm thiệp điện tử có chủ đề tình cảm, lãng mạn, nhẹ nhàng. Phong cách chủ đạo là minimalist (tối giản, tinh tế, màu sắc nhẹ nhàng, dịu mắt). Ý nghĩa chính là mời người xem bước vào không gian "trái tim" của người gửi thông qua các hiệu ứng tương tác mượt mà, nhẹ nhàng nhưng bất ngờ, độc đáo và tinh tế.

🎨 Thiết kế giao diện chung:
Màu sắc chính: trắng, pastel hồng nhạt, đỏ nhạt hoặc cam san hô nhẹ nhàng.

Typography: font chữ tối giản, nét mảnh và nhẹ nhàng (VD: Poppins, Montserrat hoặc Comfortaa).

Không gian âm: Rộng rãi, tạo cảm giác thoải mái, thông thoáng.

💖 Luồng trải nghiệm chi tiết cho người dùng:
📌 Bước 1: Landing Screen
Màn hình mở ra với giao diện đơn giản, nền trắng hoặc pastel dịu nhẹ.

Chính giữa màn hình là hình ảnh trái tim nhỏ, thanh mảnh, chỉ với nét outline (SVG line).

Text nhỏ nhẹ nhàng dưới tim:
"Nhấn nhẹ để bước vào tim anh".

Hiệu ứng tại bước này:

Trái tim rung nhẹ (pulsate) bằng CSS Animation, gợi ý người dùng tương tác.

Khi hover, hiệu ứng scale nhẹ tăng một chút.

📌 Bước 2: Hiệu ứng tương tác mở cửa trái tim
Khi người dùng click hoặc tap nhẹ lên trái tim, trái tim vẽ đường line (line-drawing animation) tạo hiệu ứng mở ra như một cánh cửa trái tim.

Sau khi trái tim được "mở ra", sẽ tạo thành một cổng vào hình trái tim, tạo cảm giác như người dùng đang thực sự bước vào bên trong không gian tim của người gửi.

Hiệu ứng tại bước này:

SVG path animation (line-drawing từ điểm bắt đầu đến điểm kết thúc nét vẽ, dùng GSAP hoặc Anime.js để mượt mà và mịn màng).

Khi mở trái tim xong, cổng trái tim được phóng lớn nhẹ nhàng từ trung tâm ra toàn màn hình, fade-out đường viền trái tim từ từ để mở ra giao diện chính bên trong.

📌 Bước 3: Giao diện chính "không gian tim anh"
Sau hiệu ứng mở, màn hình chuyển sang màu nền nhẹ nhàng, ấm áp (hồng nhạt, cam pastel), tạo cảm giác như bước vào một không gian riêng tư, gần gũi.

Thông điệp chính xuất hiện nhẹ nhàng ở chính giữa:

"Chào mừng em đến nơi sâu nhất trong tim anh".

Tiếp theo là lời mời thân mật và chân thành (ví dụ: lời yêu thương, lời ngỏ tình hoặc lời mời hẹn gặp).

Hiệu ứng tại bước này:

Chữ xuất hiện nhẹ nhàng từ dưới lên (fade-up animation).

Background gradient hoặc hiệu ứng bokeh mờ nhạt, làm tăng cảm giác ấm áp, thân mật.

📌 Bước 4: Tương tác thêm (Optional)
Có thể có thêm một nút nhỏ để người dùng phản hồi ngay lập tức (ví dụ "Trả lời lời mời" hoặc "Gửi phản hồi").

Nút bấm tối giản với hiệu ứng hover nhẹ nhàng để người dùng thấy sự phản hồi tinh tế.

💡 Yêu cầu kỹ thuật rõ ràng:
SVG line-drawing animation: sử dụng GSAP, Anime.js hoặc CSS stroke animation.

Tương tác rõ ràng, nhẹ nhàng và trực quan: tránh hiệu ứng giật, lag hay gây khó chịu.

Responsive hoàn toàn cho cả mobile và desktop, ưu tiên trải nghiệm mobile.

Load nhanh và mượt, nhẹ (tránh ảnh hoặc assets nặng), chủ yếu sử dụng SVG và CSS.

Thông điệp dễ dàng tùy biến (nếu có thể thì làm dưới dạng động để sửa thông tin dễ dàng).

📌 Prompt cụ thể dành cho lập trình viên (hoặc designer):
Prompt:
"Create a minimalist yet emotionally engaging interactive webapp themed 'Invitation to My Heart'. The webapp acts as a romantic digital invitation with the following specifications:

Minimalist, clean, aesthetic design, pastel shades (white, light pink, or pastel coral).

Initial screen with an outlined minimalist heart SVG icon subtly pulsating with CSS animation and gentle hover scale interaction, accompanied by subtle text prompt such as 'Tap gently to enter my heart'.

Interactive SVG/CSS line-drawing animation upon click/tap interaction, making the heart open smoothly, resembling a heart-shaped door opening, which then smoothly scales and transitions into a new view.

After interaction, reveal a warm, inviting message gently fading into view, set against a soft gradient or bokeh-like background, emphasizing intimacy and closeness.

Include smooth and elegant animation effects such as fade-in, subtle pulsation, SVG stroke animation, and soft scaling. Ensure animations evoke emotion (gentle, romantic, inviting).

Optimize for full responsiveness across desktop and mobile with quick loading, minimal resource usage (prioritize SVG/CSS animations over heavy images).

Optional: Include an interactive response button for user feedback, maintaining consistent minimalist aesthetics.
Prioritize a smooth user experience, simplicity in design, uniqueness in interaction, and emotional engagement."

🛠️ Công nghệ khuyên dùng:
Frontend Framework: React hoặc Svelte (ưu tiên React).

Animation Libraries: GSAP, Anime.js, Framer Motion.

SVG creation: Figma hoặc Illustrator.

