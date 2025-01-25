import { title } from "@/components/primitives";
import { Image } from "@heroui/image";

export default function CloudImagePage() {
  
  return (
    <div>
      <p className={title()}>Cloud Image Upload &#40;S3 Bucket&#41;</p>
      <Image 
            alt="German Shepherd sitting pose"
            height={536}
            src="https://sweng861-pds.s3.us-east-2.amazonaws.com/german-shepherd.png"
            width={720}
          />
    </div>
  );
}
