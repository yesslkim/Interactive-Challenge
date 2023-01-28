import { Icon } from '@iconify/react';
import { contents } from '../components/Contents';
import ContentsList from '../components/ContentsList';

const Home = () => {
  return (
    <main>
      <div>
        <h2 className="sr_only">프로젝트 리스트 방식 메뉴</h2>
        <ul>
          <li><button type="button"><Icon icon="material-symbols:grid-view" /></button></li>
          <li><button type="button"><Icon icon="mdi:list-box" /></button></li>
        </ul>
      </div>
      <section>
        <ul>
          {
            contents.map(content => (
              <ContentsList pageId={content.pageId} src={content.src} alt={content.alt} />
            ))
          }
        </ul>
       </section>
    </main>
  );
}
 
export default Home;