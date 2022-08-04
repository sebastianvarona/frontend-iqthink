import dashboard from '../../assets/icons/Dashboard.svg';
import calendar from '../../assets/icons/Calendar.svg';
import characters from '../../assets/icons/Characters.svg';
import chat from '../../assets/icons/Chat.svg';
import logout from '../../assets/icons/Logout.svg';

function Sidebar(): JSX.Element {
  type MenuElement = {
    name: string;
    icon: string;
  };

  const menu: MenuElement[] = [
    {
      name: 'dashboard',
      icon: dashboard,
    },
    {
      name: 'calendar',
      icon: calendar,
    },
    {
      name: 'characters',
      icon: characters,
    },
    {
      name: 'chat',
      icon: chat,
    },
  ];

  return (
    <section className="p-6 h-screen">
      <div className="h-full bg-white rounded-2xl px-6 py-6 box-border flex flex-col">
        <h1 className="flex gap-3 text-2xl font-semibold leading-6 text-purple-900 items-center">
          {/* Magic Hat Logo */}
          <svg
            className="fill-purple-900 h-12"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.7008 8.59407C20.2478 8.54808 20.7581 8.52038 21.2631 8.45167C21.3711 8.43671 21.4696 8.28267 21.5558 8.17795C21.6005 8.12421 21.5957 8.02724 21.6388 7.97072C21.6734 7.92473 21.7468 7.88761 21.8016 7.88983C21.8415 7.89149 21.899 7.95687 21.9133 8.00563C22.1975 8.93927 21.7681 9.75711 20.8598 9.99647C20.0297 10.2153 19.1948 10.4143 18.3647 10.6337C18.1827 10.6819 18.0811 10.6331 18.031 10.4541C17.8475 9.79811 17.6846 9.13486 17.476 8.48769C17.3175 7.99566 17.4111 7.61666 17.7953 7.29529C17.9965 7.12685 18.1854 6.94178 18.3727 6.75561C18.4205 6.70795 18.4402 6.62872 18.4727 6.56389C18.4009 6.56334 18.32 6.53951 18.2588 6.56555C17.6825 6.81212 17.2579 7.24819 16.9498 7.79563C16.7226 8.19956 16.5017 8.61901 16.3565 9.05951C16.0101 10.1112 15.6807 11.1706 15.4008 12.2427C15.1491 13.2069 15.2848 14.1499 15.7366 15.0387C16.1803 15.9119 16.7167 16.7154 17.3574 17.4456C17.5724 17.6906 17.8267 17.8402 18.1385 17.8451C18.7228 17.854 19.3076 17.8402 19.8924 17.8357C20.1116 17.8341 20.2452 17.7138 20.2797 17.495C20.3271 17.1969 20.3819 16.896 20.3883 16.5957C20.3952 16.2815 20.2382 16.1801 19.9584 16.3092C19.6008 16.4738 19.2581 16.6732 18.9069 16.8539C18.8132 16.9021 18.7159 17.0212 18.611 16.8788C18.5099 16.7414 18.61 16.6411 18.6956 16.5597C18.8867 16.3779 19.0766 16.1906 19.2884 16.0371C19.8439 15.6332 20.4032 15.2343 20.9758 14.8569C21.3445 14.6137 21.5249 14.7046 21.5983 15.1462C21.7665 16.159 21.8601 17.1764 21.7133 18.2031C21.6574 18.5948 21.4951 18.8846 21.1434 19.0913C20.4192 19.5174 19.6758 19.8676 18.842 19.9734C17.7389 20.1141 16.8428 19.7152 16.0409 18.9267C15.313 18.2114 14.5404 17.536 13.7358 16.9154C12.5136 15.9729 11.0981 15.4565 9.6178 15.1672C8.26091 14.9018 6.89232 14.6957 5.52319 14.504C5.02354 14.4342 4.69629 14.2286 4.48238 13.7471C3.85502 12.3353 3.21116 10.9318 2.55826 9.5327C1.94633 8.22228 1.87768 6.87252 2.15811 5.46347C2.25389 4.98252 2.4646 4.63788 2.80782 4.33257C3.43199 3.77793 4.12799 3.35959 4.89476 3.06039C5.06504 2.9939 5.1539 3.03434 5.20605 3.21719C5.48381 4.1935 5.61737 5.18975 5.60088 6.20761C5.59928 6.31898 5.58758 6.42094 5.45455 6.43645C5.30715 6.45418 5.30023 6.33339 5.28427 6.23365C5.20818 5.7588 5.07089 5.30666 4.84262 4.88611C4.7032 4.62957 4.5739 4.58579 4.31849 4.72321C3.78957 5.00746 3.55065 5.47954 3.57725 6.08294C3.59055 6.37605 3.62408 6.68967 3.73848 6.95175C3.95665 7.4521 4.20461 7.9469 4.5026 8.39959C4.92456 9.04067 5.58598 9.26341 6.29635 9.33655C6.94446 9.40304 7.59524 9.44405 8.24282 9.51386C8.33434 9.52383 8.44289 9.61415 8.49823 9.69948C8.98725 10.4536 9.52308 11.1623 10.1717 11.779C10.6474 12.2311 11.2067 12.5253 11.7883 12.7835C11.8383 12.8057 11.9192 12.7514 11.9857 12.7326C11.9442 12.6661 11.9176 12.5702 11.8585 12.5375C11.1764 12.163 10.5666 11.6892 10.0318 11.1113C9.57736 10.6198 9.19583 10.0729 8.87816 9.47618C8.77866 9.28945 8.76855 9.10882 8.8888 8.9304C10.1127 7.11632 11.4046 5.36207 12.8541 3.73083C13.4325 3.07812 14.0806 2.91355 14.8586 3.03878C16.5321 3.30806 18.205 3.584 19.878 3.85883C19.9498 3.87046 20.0211 3.89041 20.0908 3.91313C20.4628 4.03447 20.5942 4.27218 20.4772 4.6606C20.334 5.1349 20.1542 5.59756 20.019 6.07408C19.8152 6.79384 19.7115 7.53244 19.7013 8.28434C19.7003 8.36579 19.7013 8.44724 19.7013 8.59407H19.7008ZM14.6276 12.1258C14.6926 12.0959 14.758 12.066 14.8229 12.0366C14.7713 11.9801 14.7293 11.9075 14.6676 11.8704C14.3414 11.6754 13.9928 11.6288 13.6294 11.7363C13.0191 11.9164 12.6008 12.5048 12.6258 13.1443C12.6524 13.8108 13.151 14.4369 13.7635 14.5804C14.0077 14.6375 14.2397 14.6131 14.46 14.4946C14.4989 14.4735 14.5207 14.4175 14.5505 14.3782C14.5143 14.3516 14.4802 14.3206 14.4409 14.3006C14.4121 14.2862 14.3754 14.2896 14.3435 14.2812C13.8396 14.1527 13.4751 13.6152 13.5395 13.0972C13.6102 12.527 14.086 12.0854 14.6276 12.1269V12.1258Z" />
          </svg>{' '}
          Gandalf's <br /> Book
        </h1>
        <ul className="flex flex-col h-full mt-10 mb-3">
          {menu.map((item, index) => (
            <li
              key={index}
              className="flex gap-3 py-2 my-2 opacity-40 hover:opacity-100 transition cursor-pointer"
            >
              <img src={item.icon} alt={item.name} className="h-6" />
              <a href="#" className="capitalize font-semibold">
                {item.name}
              </a>
            </li>
          ))}
          <li className="flex gap-3 py-2 mt-auto opacity-40 hover:opacity-70 transition cursor-pointer">
            <a href="#" className="capitalize font-semibold">
              Logout
            </a>
            <img src={logout} alt="Logout" className="h-6 ml-12" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Sidebar;