import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusCircleIcon } from "lucide-react";
import { deleteHotel, getHotels } from "@/app/_actions/hotels";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatId } from "@/lib/utils";
import { IconButton } from "@/components/form/buttons";
import FormContainer from "@/components/form/form-container";

export default async function HotelsPage() {
  const hotels = await getHotels();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl dark:text-gray-100 font-bold tracking-tight">
            Oteller
          </h2>
          <p className="text-muted-foreground ">
            Otelleri bu alandan yönetebilirsiniz
          </p>
        </div>

        <Button asChild>
          <Link href="/dashboard/hotels/new">
            <PlusCircleIcon />
            Yeni Otel
          </Link>
        </Button>
      </div>

      <section>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>İSİM</TableHead>
              <TableHead>RESİMLER</TableHead>
              <TableHead>İŞLEMLER</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {hotels.map((hotel) => {
              return (
                <TableRow key={hotel.id}>
                  <TableCell>{formatId(hotel.id)}</TableCell>
                  <TableCell>{hotel.name}</TableCell>
                  <TableCell>{hotel.images.length} Resim</TableCell>
                  <TableCell className="flex items-center gap-x-2">
                    <Link href={`/dashboard/hotels/${hotel.id}/edit`}>
                      <IconButton actionType="edit"></IconButton>
                    </Link>
                    <DeleteItem itemId={hotel.id} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </section>
    </div>
  );
}

const DeleteItem = ({ itemId }: { itemId: string }) => {
  return (
    <FormContainer action={deleteHotel}>
      <input type="hidden" name="id" value={itemId} />
      <IconButton actionType="delete" />
    </FormContainer>
  );
};
