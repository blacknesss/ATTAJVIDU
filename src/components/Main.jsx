import { Link } from "react-router-dom";

function Main() {
  const categories = ['Арабский алфавит', 'Правила таджвида', 'Короткие суры Священного Корана'];


  function toLink(item) {
    switch (item) {
      case 'Арабский алфавит':
        return '/arabicAlf';
      case 'Правила таджвида':
        return '/tajvidRools';
      case 'Короткие суры Священного Корана':
        return '/suras';
      default:
        return '/';
    }
  }

  return (
    <div className='bg-main'>
      <div className='container'>
        <div className='main'>
          <div className='grid'>
            {categories.map((item, index) => (
                <div className='item' key={index}>
                  <span className="main-link">
                    {item}
                    <Link className="item__inner" to={toLink(item)}></Link>
                  </span>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;