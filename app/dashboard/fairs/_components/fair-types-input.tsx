import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FAIR_TYPES } from "@/lib/constants";

const name = "type";
const FairTypesInput = ({ defaultValue }: { defaultValue?: string }) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize mb-1.5">
        Fuar Türü
      </Label>
      <Select defaultValue={defaultValue || FAIR_TYPES[0]} name={name} required>
        <SelectTrigger id={name} className="w-full cursor-pointer">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {FAIR_TYPES.map((item) => {
            return (
              <SelectItem key={item} value={item}>
                <span className="flex items-center gap-2">{item}</span>
              </SelectItem>
            );
            return;
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FairTypesInput;
