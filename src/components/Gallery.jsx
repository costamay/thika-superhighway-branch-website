import { galleryImages } from '../data/content'
import './Gallery.css'

export default function Gallery() {
  return (
    <section id="gallery" className="gallery section section--dark">
      <div className="container">
        <header className="section-header section-header--light">
          <span className="section-label">Gallery</span>
          <h2>Our branch in action</h2>
          <p>
            Watch parties, away-day travel, and match-day moments from Thika Superhighway
            Green Army members.
          </p>
        </header>
        <div className="gallery__grid">
          {galleryImages.map((img, index) => (
            <figure
              key={`${img.src}-${index}`}
              className={`gallery__item${img.size && img.size !== 'default' ? ` gallery__item--${img.size}` : ''}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <figcaption>{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
