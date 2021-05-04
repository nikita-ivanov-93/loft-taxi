
const Header = ({navigateTo}) => {
  return (
    <div>
      <nav>
        <ul>
          <li onClick={() => {navigateTo('profile')}}>Profile</li>
          <li onClick={() => {navigateTo('map')}}>Map</li>
          <li onClick={() => {navigateTo('login')}}>LogOut</li>
          <li onClick={() => {navigateTo('registration')}}>Registration</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;
