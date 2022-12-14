import { arg, extendType, list, nonNull } from "nexus";

export const TagsQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("tags", {
      type: nonNull(list(nonNull("Tag"))),
      args: { where: arg({ type: "TagWhereInput" }) },
      async resolve(source, { where }, { db }) {
        try {
          return db.tag.findMany({
            where: {
              ...(where?.id ? { id: { in: where.id } } : {}),
              ...(where?.name ? { name: { in: where.name } } : {}),
              ...(where?.contains ? { name: { contains: where.contains } } : {}),
            },
          });
        } catch {
          return [];
        }
      },
    });
  },
});
