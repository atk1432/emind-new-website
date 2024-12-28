import { FAQ } from "@/types/faq";

const faqData: FAQ[] = [
  {
    id: 1,
    quest: "Ứng dụng này hoạt động như thế nào để nhận diện stress?",
    ans: "Ứng dụng sử dụng trí tuệ nhân tạo để phân tích dữ liệu từ các nguồn như biểu cảm khuôn mặt, nhịp tim hoặc các câu trả lời của người dùng trong bảng hỏi tâm lý. AI sẽ so sánh dữ liệu này với các mô hình đã được huấn luyện trước để phát hiện các dấu hiệu của stress và cung cấp đánh giá phù hợp.",
  },
  {
    id: 2,
    quest: "Dữ liệu cá nhân của tôi có được bảo mật không?",
    ans: "Đúng vậy, bảo mật dữ liệu là ưu tiên hàng đầu. Dữ liệu của bạn được mã hóa và chỉ sử dụng cho mục đích phân tích bên trong ứng dụng. Ứng dụng tuân thủ các quy định về bảo mật như GDPR hoặc các tiêu chuẩn địa phương khác để đảm bảo thông tin cá nhân không bị lạm dụng.",
  },
  {
    id: 3,
    quest: "Ứng dụng có thể giúp tôi giảm stress hay chỉ nhận diện nó?",
    ans: "Ngoài việc nhận diện stress, ứng dụng thường cung cấp các gợi ý hoặc bài tập giúp bạn giảm stress, chẳng hạn như kỹ thuật thở, thiền định, hoặc quản lý thời gian hiệu quả. Một số ứng dụng còn có tính năng kết nối bạn với các chuyên gia tâm lý để hỗ trợ thêm khi cần thiết.",
  },
];

export default faqData;
