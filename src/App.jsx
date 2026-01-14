import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import SectionHeader from './components/SectionHeader'
import Card from './components/ui/Card'
import CardGrid from './components/ui/CardGrid'
import PromoCard from './components/PromoCard'
import Tabs from './components/ui/Tabs'

import img1 from './assets/1.png'
import img2 from './assets/2.jpg'
import img3 from './assets/3.jpg'
import img4 from './assets/4.jpg'
import img5 from './assets/5.jpg'
import img6 from './assets/6.jpg'
import img7 from './assets/7.jpg'
import img8 from './assets/8.jpg'
import img9 from './assets/9.jpg'
import img10 from './assets/10.jpg'


function App() {
  const [activeTab, setActiveTab] = useState('Yoga Talks');

  const yogaTeacherTraining = [
    { id: 1, title: 'Day 01 - Warm Up', subtitle: '07:00 - 08:00 AM', image: img1 },
    { id: 2, title: 'Day 02 - Warm Up', subtitle: '07:00 - 08:00 AM', image: img2 },
    { id: 3, title: 'Day 03 - Warm Up', subtitle: '07:00 - 08:00 AM', image: img3 },
  ];

  const yogaClasses = [
    { id: 1, title: 'Learn the Basic of yoga', subtitle: '06 Asanas for Beginner', image: img4, isPro: false },
    { id: 2, title: 'Learn the Basic of Training', subtitle: '06 Workouts for Beginner', image: img5, isPro: true },
    { id: 3, title: 'Learn the Basic of Training', subtitle: '06 Workouts for Beginner', image: img6, isPro: true },
  ];

  const recommendedClasses = [
    { id: 1, title: 'Day 01 - Warm Up', subtitle: 'Lorem ipsum is a dummy text', image: img7, isPro: true },
    { id: 2, title: 'Day 02 - Warm Up', subtitle: 'Lorem ipsum is a dummy text', image: img8, isPro: true },
    { id: 3, title: 'Day 01 - Warm Up', subtitle: 'Lorem ipsum is a dummy text', image: img9, isPro: false },
    { id: 4, title: 'Day 02 - Warm Up', subtitle: 'Lorem ipsum is a dummy text', image: img10, isPro: true },
  ];

  const tabOptions = ['Yoga Talks', 'Meditations', 'Teacher'];

  return (
    <div className="app">
      <Nav />
      <main className="main-content">
        <section className="section">
          <SectionHeader title="YOGA TEACHER TRAINING" actionText="See more" />
          <CardGrid columns="three">
            {yogaTeacherTraining.map(item => (
              <Card
                key={item.id}
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </CardGrid>
        </section>
        <PromoCard
          image={img4}
          title="Get Accredited by"
          highlightText="Bodsphere"
        />
        <section className="section">
          <SectionHeader title="YOGA CLASSES" actionText="See all" />
          <Tabs tabs={tabOptions} activeTab={activeTab} onTabChange={setActiveTab} />
          <CardGrid columns="three">
            {yogaClasses.map(item => (
              <Card
                key={item.id}
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                isPro={item.isPro}
              />
            ))}
          </CardGrid>
        </section>

        <section className="section">
          <SectionHeader title="RECOMMENDED CLASSES" actionText="View all" />
          <CardGrid columns="five">
            {recommendedClasses.map(item => (
              <Card
                key={item.id}
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                isPro={item.isPro}
              />
            ))}
          </CardGrid>
        </section>
      </main>
    </div>
  )
}

export default App
