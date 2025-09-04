import { deleteFair, getAllFairs } from "@/app/_actions/fairs";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatId } from "@/lib/utils";
import FormContainer from "@/components/form/form-container";
import { IconButton } from "@/components/form/buttons";

const DashboardFairsPage = async () => {
  const fairs = await getAllFairs();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl dark:text-gray-100 font-bold tracking-tight">
            Fuarlar
          </h2>
          <p className="text-muted-foreground ">
            Fuarları bu alandan yönetebilirsiniz
          </p>
        </div>

        <Button asChild>
          <Link href="/dashboard/fairs/new">
            <PlusCircleIcon />
            Yeni Fuar
          </Link>
        </Button>
      </div>

      <section>
        <Table>
          <TableCaption className="capitalize">
            Toplam Fuarlar : {fairs.length}
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>FUAR ADI</TableHead>
              <TableHead>YAYINDA MI</TableHead>
              <TableHead>EYLEMLER</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fairs.map((item) => {
              const { id: itemId, name, isPublished } = item;
              return (
                <TableRow key={itemId}>
                  <TableCell>{formatId(itemId)}</TableCell>
                  <TableCell>
                    <Link
                      href={`/products/${itemId}`}
                      className="underline text-muted-foreground tracking-wide capitalize"
                    >
                      {name}
                    </Link>
                  </TableCell>
                  <TableCell>{isPublished ? "Yayında" : "Taslakta"}</TableCell>

                  <TableCell className="flex items-center gap-x-2">
                    <Link href={`/dashboard/fairs/${itemId}/edit`}>
                      <IconButton actionType="edit"></IconButton>
                    </Link>
                    <DeleteItem id={itemId} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </section>
    </div>
  );
};

export default DashboardFairsPage;

const DeleteItem = ({ id }: { id: string }) => {
  return (
    <FormContainer action={deleteFair}>
      <input type="hidden" name="id" value={id} />
      <IconButton actionType="delete" />
    </FormContainer>
  );
};
