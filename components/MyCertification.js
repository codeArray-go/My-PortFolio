import Image from "next/image";
import React from "react";

const certificateData = {
  title: "Software Engineering Virtual Experience",
  issuer: "Forage",
  description:
    "Completed practical tasks simulating real-world software engineering workflows.",
  image: "Certificate.png",
  verifyLink:
    "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_CQ2Fb84gcNCMwBK7T_1734100419083_completion_certificate.pdf",
};

const MyCertification = () => {
  return (
    <section className="mt-14 text-white">
      {/* Heading */}
      <h1 className="text-4xl font-black uppercase mb-8">My Certification</h1>

      {/* Certificate Card */}
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {/* Image */}
        <div className="relative w-full overflow-hidden rounded-xl border border-gray-700">
          <Image
            src={`${process.env.NEXT_PUBLIC_URL}/${certificateData.image}`}
            alt={`${certificateData.title} Certificate`}
            width={1200}
            height={850}
            sizes="(max-width: 768px) 100vw, 900px"
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Optional Text Content */}
        {(certificateData.title || certificateData.description) && (
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">{certificateData.title}</h2>

            {certificateData.issuer && (
              <p className="text-sm text-gray-400">
                Issued by {certificateData.issuer}
              </p>
            )}

            {certificateData.description && (
              <p className="text-gray-300 text-sm leading-relaxed">
                {certificateData.description}
              </p>
            )}
          </div>
        )}

        {/* Verify Button */}
        {certificateData.verifyLink && (
          <a
            href={certificateData.verifyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-fit px-6 py-3 rounded-xl
                       border border-gray-600
                       hover:bg-gray-800 hover:scale-105
                       transition duration-300"
          >
            Verify Certificate
          </a>
        )}
      </div>
    </section>
  );
};

export default MyCertification;
