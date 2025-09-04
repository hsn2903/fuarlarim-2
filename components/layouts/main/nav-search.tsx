import { Input } from "@/components/ui/input";

function NavSearch() {
  return (
    <Input
      type="search"
      placeholder="Fuar, kategori, sektör ara"
      className="max-w-xs dark:bg-muted "
    />
  );
}
export default NavSearch;
