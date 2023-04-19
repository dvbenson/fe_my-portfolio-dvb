export default function Footer({ styles, page }) {
  return (
    <footer
      className={
        (page === 'home'
          ? 'bg-black h-24'
          : page === 'about'
          ? 'bg-white h-24'
          : page === 'projects'
          ? 'bg-blue h-24'
          : page === 'contact'
          ? 'bg-pink h-24'
          : null) + ' pb-2'
      }
    >
      <div className='container mx-auto px-4 h-full flex flex-col justify-end'>
        <div className='row '>
          <div className='col-md-4 space-y-1'>
            <p className='font-serif font-semibold text-black-gray text-center text-sm'>
              danielvb@danielvb.dev
            </p>
            <p className='font-serif font-medium text-black-gray text-center text-xs'>
              © 2023 All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
