export default function Footer() {
    return (
        <footer class="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-8 px-4 flex items-center justify-between">
            <div class="flex items-center">
                <img src="https://newsroom.spotify.com/media-kit/logo-and-brand-assets/" alt="Logo Spotify" class="w-10 h-10" />
                <span class="ml-2 font-bold text-lg">Spotify</span>
            </div>

            <nav class="flex space-x-4">
                <a href="#" class="hover:underline">Về chúng tôi</a>
                <a href="#" class="hover:underline">Công việc</a>
                <a href="#" class="hover:underline">Hỗ trợ</a>
                <a href="#" class="hover:underline">Liên hệ</a>
            </nav>

            <div class="flex items-center">
                <ul class="flex space-x-4">
                    <li>
                        <a href="#" class="flex items-center">
                            <img src="https://icons8.com/icons/set/facebook" alt="Facebook" class="w-4 h-4" />
                            <span class="ml-2">Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center">
                            <img src="https://www.flaticon.com/free-icons/twitter" alt="Twitter" class="w-4 h-4" />
                            <span class="ml-2">Twitter</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center">
                            <img src="https://www.flaticon.com/free-icons/instagram" alt="Instagram" class="w-4 h-4" />
                            <span class="ml-2">Instagram</span>
                        </a>
                    </li>
                </ul>

                <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Đăng ký</button>
            </div>

            <div class="text-sm">© 2024 Spotify AB</div>
        </footer>

    )
}