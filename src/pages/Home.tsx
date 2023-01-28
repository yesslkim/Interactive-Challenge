import { Icon } from '@iconify/react';
import { useState } from 'react';
import { contents } from '../components/Contents';
import ContentsList from '../components/ContentsList';

const Home = () => {
  const [isCardView, setIsCardView] = useState(true);

  return (
    <main className='main'>
      <div className='contents_menu'>
        <h2 className='sr_only'>프로젝트 리스트 방식 메뉴</h2>
        <ul>
          <li>
            <button type="button">
              <span className="sr_only">카드 형식 메뉴</span>
              <Icon icon="clarity:view-cards-line" onClick={() => setIsCardView(true)} />
            </button>
          </li>
          <li>
            <button type="button">
              <span className="sr_only">리스트 형식 메뉴</span>
              <Icon icon="clarity:view-list-line" onClick={() => setIsCardView(false)} />
            </button>
          </li>
        </ul>
      </div>
      <section className={isCardView ? 'contents' : 'contents list_view'}>
        <ul>
          {
            contents.map(content => (
              <ContentsList key={content.pageId} pageId={content.pageId} src={content.src} alt={content.alt} isCardView={ isCardView } />
            ))
          }
        </ul>
       </section>
    </main>
  );
}
 
export default Home;