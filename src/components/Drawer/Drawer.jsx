import { DrawerWrapperStyle, DrawerStyle } from "./Drawer.style"
import { Icon } from "../UIKit"

const Drawer = ({ className, opened, onDrawerClose, children }) => {
  return (
    <DrawerWrapperStyle opened={opened} className={className}>
      <div className="overlay" onClick={onDrawerClose} />
      <DrawerStyle opened={opened}>
        <button onClick={onDrawerClose} className="btn-close">
          <Icon name="close" size={16} />
        </button>
        {children}
      </DrawerStyle>
    </DrawerWrapperStyle>
  )
}

export default Drawer
