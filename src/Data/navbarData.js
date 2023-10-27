import { IoIosArrowDown } from "react-icons/io"
import { AiOutlineHome } from "react-icons/ai"
import { BiSolidHot } from "react-icons/bi"
import { AiOutlineLogin } from "react-icons/ai"

const navbarDatas = [
    { id: 1, title: 'خانه', href: '/', icon: <AiOutlineHome /> },
    {
        id: 2, title: 'دسته بندی ها', icon: <IoIosArrowDown />, subMenu: [
            { id: 1, title: 'سیاسی', href: '/blogar/Post' },
            { id: 2, title: 'تکنولوژی', href: '/blogar/Post' },
            { id: 3, title: 'ورزشی', href: '/blogar/Post' },
            { id: 4, title: 'قیمت ارز', href: '/blogar/Post' },
            { id: 5, title: 'آشپزی', href: '/blogar/Post' },
            { id: 6, title: 'بیمه و بازنشستگی', href: '/blogar/Post' },
            { id: 7, title: 'اقتصاد', href: '/blogar/Post' },
            { id: 8, title: 'طبیعت', href: '/blogar/Post' },
        ]
    },
    {
        id: 3, title: 'مگامنو', icon: <IoIosArrowDown />, subMenu: [
            { id: 1, title: 'نسخه 1', href: '#' },
            { id: 2, title: 'نسخه 2', href: '#' },
            { id: 3, title: 'نسخه 3', href: '#' },
            { id: 4, title: 'نسخه 4', href: '#' },
            { id: 5, title: 'نسخه 5', href: '#' },
        ]
    },
    {
        id: 4, title: 'صفحات', icon: <IoIosArrowDown />, subMenu: [
            { id: 1, title: 'گالری', href: '#', href: '/blogar/Post' },
            { id: 2, title: 'ویدیو', href: '#', href: '/blogar/Post' },
            { id: 3, title: 'متن', href: '#', href: '/blogar/Post' },
            { id: 4, title: 'شرایط و قوانین', href: '/blogar/rules' },
        ]
    },
    { id: 6, title: 'اخبار داغ', href: '/blogar/hot-news', icon: <BiSolidHot /> },
    { id: 5, title: 'ثبت نام', href: '/blogar/register', icon: <AiOutlineLogin /> },
]

export { navbarDatas }
