export default function Footer({ styles, page }) {
  return (
    <footer
      className={
        page === 'home'
          ? 'bg-black h-24'
          : page === 'about'
          ? 'bg-pink h-24'
          : page === 'contact' || page === 'projects'
          ? 'bg-electric-lime h-24'
          : 'bg-pink h-24'
      }
    >
      <div className='container flex justify-center py-2'>
        <div className='row'>
          <div className='col-md-4'>
            <p className='font-serif font-medium text-white text-center text-sm'>
              danielvb@danielvb.dev
            </p>
            <p className='font-serif font-medium text-white text-center text-xs mt-2 text-[#CCCCCC]'>
              © 2023 All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
