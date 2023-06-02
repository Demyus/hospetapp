import NavbarItem from "./NavbarItem";

export default function Navbar() {
    return (
        <div className="flex justify-center bg-amber-100 lg:text-lg p-2 ">
            <NavbarItem title='Trending' param='fetchTrending' />
            <NavbarItem title='Top Rated' param='fetchTopRated' />
        </div>
    )
}