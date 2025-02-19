import type {StructureResolver} from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('ANOMAR')
    .items([
      S.documentTypeListItem('order').title('Orders'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('design').title('Designs'),
      S.documentTypeListItem('product').title('Products'),
      S.divider(),
      // ...S.documentTypeListItems().filter(
      //   (item) => item.getId() && !['order', 'category', 'design'].includes(item.getId()!),
      // ),
    ]);