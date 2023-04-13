import TravelExploreIcon from '@mui/icons-material/TravelExplore';

export default function Header() {
    return (
      <nav className='navbar bg-light mb-4 p-0'>
        <div className='container'>
          <a className='navbar-brand' href='/'>
            <div className='d-flex'>
              <TravelExploreIcon alt='logo' className='mr-2' />
              <div>CRUD GraphQL</div>
            </div>
          </a>
        </div>
      </nav>
    );
  }
