import Header from '../coponents/layout/header/Header'
import SideNav from '../coponents/layout/nav/SideNav'
import '../styles/main.scss'
import '../styles/layoutStyles/header.scss'
import '../styles/layoutStyles/nav.scss'
import '../styles/main/schedule.scss'
import ScheduleMain from '../coponents/schedule/ScheduleMain'

export default function MainPage() {
  return (
    <div className="main_block">
      <Header />
      <div className="content_block">
        <SideNav />
        <ScheduleMain />
      </div>
    </div>
  )
}
