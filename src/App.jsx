import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import SectionHeader from './components/SectionHeader'
import Card from './components/ui/Card'
import CardGrid from './components/ui/CardGrid'
import PromoCard from './components/PromoCard'
import Tabs from './components/ui/Tabs'

function App() {
  const [activeTab, setActiveTab] = useState('Yoga Talks');

  const yogaTeacherTraining = [
    { id: 1, title: 'Day 01 - Warm Up', subtitle: '07:00 - 08:00 AM', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400' },
    { id: 2, title: 'Day 02 - Warm Up', subtitle: '07:00 - 08:00 AM', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400' },
    { id: 3, title: 'Day 03 - Warm Up', subtitle: '07:00 - 08:00 AM', image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400' },
  ];

  const yogaClasses = [
    { id: 1, title: 'Learn the Basic of yoga', subtitle: '06 Asanas for Beginner', image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=400', isPro: false },
    { id: 2, title: 'Learn the Basic of Training', subtitle: '06 Workouts for Beginner', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400', isPro: true },
    { id: 3, title: 'Learn the Basic of Training', subtitle: '06 Workouts for Beginner', image: 'https://images.unsplash.com/photo-1540206395-68808572332f?w=400', isPro: true },
  ];

  const recommendedClasses = [
    { id: 1, title: 'Day 01 - Warm Up', subtitle: 'Lorem ipsum is a dummy text', image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=400', isPro: true },
    { id: 2, title: 'Day 02 - Warm Up', subtitle: 'Lorem ipsum is a dummy text', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400', isPro: true },
    { id: 3, title: 'Day 01 - Warm Up', subtitle: 'Lorem ipsum is a dummy text', image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400', isPro: false },
    { id: 4, title: 'Day 02 - Warm Up', subtitle: 'Lorem ipsum is a dummy text', image: 'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?w=400', isPro: true },
    { id: 5, title: 'Day 01 - Warm Up', subtitle: 'Lorem ipsum is a dummy text', image: 'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=400', isPro: true },
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
          image="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800"
          bannerText="1026 × 237.53"
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
