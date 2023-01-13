import { Button } from '../Common';
import { SpecialsItem } from './SpecialsItem';

import { specials as specialsData } from '../../data';

import './styles.css';

export const Specials = () => (
  <section id='specials-section' className='container specials'>
    <h2 className='specials-heading flex'>
      <span>This week's specials!</span>
      <Button type='primary' handleClick={() => {}}>
        Online Menu
      </Button>
    </h2>

    <div className='grid specials-grid'>
      {specialsData.map((item) => (
        <SpecialsItem item={item} key={item.id} />
      ))}
    </div>
  </section>
);
