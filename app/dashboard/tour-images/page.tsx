import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusCircleIcon } from "lucide-react";
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
import { deleteTourImage, getTourImages } from "@/app/_actions/tour-images";

export default async function HotelsPage() {
  const data = await getTourImages();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl dark:text-gray-100 font-bold tracking-tight">
            Tur Görselleri
          </h2>
          <p className="text-muted-foreground ">
            Tur görsellerini bu alandan yönetebilirsiniz
          </p>
        </div>

        <Button asChild>
          <Link href="/dashboard/tour-images/new">
            <PlusCircleIcon />
            Yeni Tur Görseli Ekle
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
            {data.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell>{formatId(item.id)}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.images.length} Resim</TableCell>
                  <TableCell className="flex items-center gap-x-2">
                    <Link href={`/dashboard/tour-images/${item.id}/edit`}>
                      <IconButton actionType="edit"></IconButton>
                    </Link>
                    <DeleteItem itemId={item.id} />
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
    <FormContainer action={deleteTourImage}>
      <input type="hidden" name="id" value={itemId} />
      <IconButton actionType="delete" />
    </FormContainer>
  );
};
