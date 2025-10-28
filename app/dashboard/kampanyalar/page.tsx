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
import { deleteCampaignAction, getAllCampaigns } from "@/app/_actions/campaign";
import EmptyList from "@/components/shared/empty-list";
import { IconButton } from "@/components/form/buttons";
import FormContainer from "@/components/form/form-container";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";

async function ItemsPage() {
  const items = await getAllCampaigns();
  if (items?.length === 0) return <EmptyList />;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl dark:text-gray-100 font-bold tracking-tight">
            Kampanyalar
          </h2>
          <p className="text-muted-foreground ">
            Kampanyaları bu alandan yönetebilirsiniz
          </p>
        </div>

        <Button asChild>
          <Link href="/dashboard/kampanyalar/yeni">
            <PlusCircleIcon />
            Yeni Kampanya
          </Link>
        </Button>
      </div>

      <section>
        <Table>
          <TableCaption className="capitalize">
            Toplam Kampanyalar : {items?.length}
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Kampanya Adı</TableHead>
              <TableHead>Durum</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items?.map((item) => {
              const { id, name } = item;
              return (
                <TableRow key={id}>
                  <TableCell>
                    <Link
                      href={`/dashboard/kampanyalar/${id}`}
                      className="underline text-muted-foreground tracking-wide capitalize"
                    >
                      {name}
                    </Link>
                  </TableCell>

                  <TableCell>
                    {item.isPublished ? "Yayında" : "Taslakta"}
                  </TableCell>

                  <TableCell className="flex items-center gap-x-2">
                    <Link href={`/dashboard/kampanyalar/${id}/duzenle`}>
                      <IconButton actionType="edit"></IconButton>
                    </Link>
                    <DeleteItem campaignId={id} />
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

export default ItemsPage;

function DeleteItem({ campaignId }: { campaignId: string }) {
  const deleteCampaign = deleteCampaignAction.bind(null, { campaignId });

  return (
    <FormContainer action={deleteCampaign}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
}
