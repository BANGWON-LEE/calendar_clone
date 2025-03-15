import LeftHeader from './LeftHeader'
import RightHeader from './RightHeader'
import CenterHeader from './CenterHeader'

export default function Header() {
  return (
    <header className="header_block">
      <LeftHeader />
      <CenterHeader />
      <RightHeader />
    </header>
  )
}
