export default function Footer({ styles, page }) {
  return (
    <footer
      className={
        (page === 'home'
          ? 'bg-black h-24 font-serif font-semibold text-black-gray'
          : page === 'about'
          ? 'bg-white h-24 font-serif font-semibold text-black-gray'
          : page === 'projects'
          ? 'bg-gray-black h-24 font-serif font-semibold text-black'
          : page === 'contact'
          ? 'bg-pink h-24 font-serif font-semibold text-black-gray'
          : null) + ' pb-2'
      }
    >
      <div className='container mx-auto px-4 h-full flex flex-col justify-end'>
        <div className='row '>
          <div className='col-md-4 space-y-1'>
            <p className='text-center text-sm'>danielvb@danielvb.dev</p>
            <p className='text-center text-xs'>© 2023 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
