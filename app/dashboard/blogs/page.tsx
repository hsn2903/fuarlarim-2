import { deleteBlog, getAllBlogs } from "@/app/_actions/blogs";
import { IconButton } from "@/components/form/buttons";
import FormContainer from "@/components/form/form-container";
import { Button } from "@/components/ui/button";
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
import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";

const DashboardBlogsPage = async () => {
  const blogs = await getAllBlogs();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl dark:text-gray-100 font-bold tracking-tight">
            Blog
          </h2>
          <p className="text-muted-foreground ">
            Blog makeleleri bu alandan yönetebilirsiniz
          </p>
        </div>

        <Button asChild>
          <Link href="/dashboard/blogs/new">
            <PlusCircleIcon />
            Yeni Blog Yazısı
          </Link>
        </Button>
      </div>

      <section>
        <Table>
          <TableCaption className="capitalize">
            Toplam Makale : {blogs.length}
          </TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>BAŞLIK</TableHead>
              <TableHead>KATEGORİ</TableHead>
              <TableHead>DURUM</TableHead>
              <TableHead>İŞLEMLER</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogs.map((blogpost) => {
              return (
                <TableRow key={blogpost.id}>
                  <TableCell>{formatId(blogpost.id)}</TableCell>
                  <TableCell>{blogpost.title}</TableCell>
                  <TableCell>{blogpost.category}</TableCell>
                  <TableCell>
                    {blogpost.isPublished ? "Yayında" : "Taslakta"}
                  </TableCell>
                  <TableCell className="flex items-center gap-x-2">
                    <Link href={`/dashboard/blogs/${blogpost.id}/edit`}>
                      <IconButton actionType="edit"></IconButton>
                    </Link>
                    <DeleteBlogpost blogpostId={blogpost.id} />
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

export default DashboardBlogsPage;

const DeleteBlogpost = ({ blogpostId }: { blogpostId: string }) => {
  return (
    <FormContainer action={deleteBlog}>
      <input type="hidden" name="id" value={blogpostId} />
      <IconButton actionType="delete" />
    </FormContainer>
  );
};
