export default function LeftHeader() {
  return (
    <div className="header_block_left">
      <div
        className="menu_block"
        aria-expanded="true"
        aria-label="기본 창"
        role="button"
      >
        <svg focusable="false" viewBox="0 0 24 24">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg>
      </div>
      <div className="logo_block">
        <span className="logo_block_inner">
          <img
            className="logo_block_inner_img"
            src="https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_28_2x.png"
            alt=""
            aria-hidden="true"
            role="presentation"
          />
          <span className="logo_block_inner_text" role="heading">
            Calendar
          </span>
        </span>
      </div>
    </div>
  )
}
