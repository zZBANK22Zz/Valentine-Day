import { Card, CardBody, CardFooter, Image } from "@heroui/react";

export default function CardModal({ onSelect }: { onSelect: (index: number) => void }) {
  const list = [
    {
      title: "Valentine",
      img: "/image.png",
    },
    {
      title: "Songkran",
      img: "/songkarn.png",
    },
    {
      title: "เข้าพรรษา",
      img: "/เข้าพรรษา.png",
    },
    {
      title: "วันเกิด",
      img: "/วันเกิด.png",
    },
  ];

  return (
    <div className="gap-4 grid grid-cols-4 sm:grid-cols-4">
      {list.map((item, index) => (
        /* eslint-disable no-console */
        <Card
          key={index}
          isPressable
          shadow="sm"
          className="hover:scale-105 focus:ring-2 focus:ring-pink-500 transition-transform duration-300"
          onPress={() => onSelect(index)}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              alt={item.title}
              src={item.img}
              width={250} // ✅ Set a fixed width
              height={140} // ✅ Set a fixed height
              className="rounded-lg object-cover"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
