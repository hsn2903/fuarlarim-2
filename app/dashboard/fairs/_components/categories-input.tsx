import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FAIR_CATEGORIES } from "@/lib/constants";

const name = "category";
function CategoriesInput({ defaultValue }: { defaultValue?: string }) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize mb-1.5">
        Fuar Kategorileri
      </Label>
      <Select
        defaultValue={defaultValue || FAIR_CATEGORIES[0]}
        name={name}
        required
      >
        <SelectTrigger id={name} className="w-full cursor-pointer">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {FAIR_CATEGORIES.map((item) => {
            return (
              <SelectItem key={item} value={item}>
                <span className="flex items-center gap-2">{item}</span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}
export default CategoriesInput;
