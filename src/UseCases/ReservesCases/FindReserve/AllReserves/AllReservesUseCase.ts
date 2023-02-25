import client from "../../../../prisma/client";

class AllReservesUseCase {
  async execute() {
    const allReserves = await client.reserve.findMany({
      include: {
        lab: true,
        user: { select: { id: true, firstName: true, role: true } },
      },
    });
    
    return allReserves;
  }
}

export default AllReservesUseCase;
