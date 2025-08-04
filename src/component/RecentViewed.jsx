import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RecentViewed = ({ shoes }) => {
  const [watchedItems, setWatchedItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const watched = JSON.parse(localStorage.getItem('watched')) || [];
    // 최근 본 상품 순서대로 정렬 (최신이 위로)
    const recentItems = watched.slice(-5).reverse();
    const watchedProducts = recentItems.map(id => 
      shoes.find(shoe => shoe.id === id)
    ).filter(Boolean);
    setWatchedItems(watchedProducts);
  }, [shoes]);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const goToDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className={`recent-viewed ${isOpen ? 'open' : ''}`}>
      <div className="recent-tab" onClick={togglePanel}>
        <div className="tab-text">
          <div>최</div>
          <div>근</div>
          <div>본</div>
          <div>상</div>
          <div>품</div>
        </div>
        <div className="arrow">{isOpen ? '◀' : '▶'}</div>
      </div>
      
      {isOpen && (
        <div className="recent-content">
          <div className="recent-header">
            <h6>최근 본 상품</h6>
            <span className="close-btn" onClick={togglePanel}>×</span>
          </div>
          
          {watchedItems.length === 0 ? (
            <div className="no-items">
              <p>최근 본 상품이 없습니다</p>
            </div>
          ) : (
            <div className="recent-list">
              {watchedItems.map((item, index) => (
                <div 
                  key={index} 
                  className="recent-item"
                  onClick={() => goToDetail(item.id)}
                >
                  <img 
                    src={`https://codingapple1.github.io/shop/shoes${item.id + 1}.jpg`} 
                    alt={item.title}
                  />
                  <div className="item-info">
                    <p className="item-title">{item.title}</p>
                    <p className="item-price">{item.price.toLocaleString()}원</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RecentViewed;