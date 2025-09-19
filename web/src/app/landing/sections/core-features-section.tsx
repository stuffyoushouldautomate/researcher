// Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
// SPDX-License-Identifier: MIT

import {
  BookOpen,
  Building2,
  FileText,
  Search,
  Users,
  type LucideProps,
} from "lucide-react";
import { useTranslations } from "next-intl";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

import { BentoCard, BentoGrid } from "~/components/magicui/bento-grid";

import { SectionHeader } from "../components/section-header";

type FeatureIcon = {
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  href: string;
  className: string;
};

const featureIcons: Array<FeatureIcon> = [
  {
    Icon: Search,
    href: "https://datapilotplus.com",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Users,
    href: "https://datapilotplus.com",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: BookOpen,
    href: "https://datapilotplus.com",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Building2,
    href: "https://datapilotplus.com",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: FileText,
    href: "https://datapilotplus.com",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4",
  },
];

export function CoreFeatureSection() {
  const t = useTranslations("landing.coreFeatures");
  const tCommon = useTranslations("common");
  const features = t.raw("features") as Array<{
    name: string;
    description: string;
  }>;

  return (
    <section className="relative flex w-full flex-col content-around items-center justify-center">
      <SectionHeader
        anchor="core-features"
        title={t("title")}
        description={t("description")}
      />
      <BentoGrid className="w-3/4 lg:grid-cols-2 lg:grid-rows-3">
        {features.map((feature, index) => {
          const iconData = featureIcons[index];
          return iconData ? (
            <BentoCard
              key={feature.name}
              {...iconData}
              {...feature}
              background={
                <img
                  alt="background"
                  className="absolute -top-20 -right-20 opacity-60"
                />
              }
              cta={tCommon("learnMore")}
            />
          ) : null;
        })}
      </BentoGrid>
    </section>
  );
}
