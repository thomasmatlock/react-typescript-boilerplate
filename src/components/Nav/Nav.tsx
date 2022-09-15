import NavLogoImg from './navLogo.svg';
import './Nav.scss';
export default function Nav() {
	return (
		<div className="nav">
			<div className="nav_container">
				<a href="/" className="nav__logo">
					<img className="nav__logo__img" src={NavLogoImg} alt="" />
					<img
						className="nav__logo__text"
						src="img/public/sections/nav/logo_lowercase_extrabold.svg"
						alt=""
					/>
					<span className="icon icon_black_hole"></span>
				</a>
				<div className="nav__buttons">
					<a href="#audio" className="nav__button">
						<img
							src="img/3rdparty/flaticon/1394849-music/svg/039-headphones-2.svg"
							alt=""
						/>
						<p>Audio</p>
					</a>
					<a href="#video" className="nav__button">
						<img
							src="img/3rdparty/flaticon/179502-miscellaneous/svg/film-strip.svg"
							alt=""
						/>
						<p>Video</p>
					</a>
					<a href="#warpstagram" className="nav__button">
						<img
							src="img/3rdparty/flaticon/1384052-social-media/svg/011-instagram.svg"
							alt=""
						/>
						<p>Warpstagram</p>
					</a>
				</div>
				<div className="nav__cta">
					<a
						id="user_download__header"
						href="https://github.com/thomasmatlock/warp-app/releases/download/early-access/Warp.Setup.4.6.0.exe"
						className="user_download nav__cta__btn  glow__dark__cta"
					>
						Download Warp now
					</a>
				</div>
			</div>
		</div>
	);
}
