export interface ITopic {
  id: number;
  attributes: TopicAttributes;
}

export interface IPost {
  id: number;
  attributes: PostAttributes;
}

interface TopicAttributes
  extends CommonDateFields,
    TopicAsset,
    CommonDateFields {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  title: string;
}

interface PostAttributes extends CommonDateFields, PostAsset, CommonDateFields {
  fullText: string;
  title: string;
  views: number;
}

interface ImFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string;
  width: number;
  height: number;
  size: number;
  url: string;
}

type TopicAsset = { icon: TopicMedia };
type PostAsset = { images: PostMedia };
type CommonDateFields = { createdAt: Date; updatedAt: Date; publishedAt: Date };

type PostMedia = {
  data: MediaData[];
};

type TopicMedia = {
  data: MediaData;
};

type MediaData = {
  id: number;
  attributes: {
    name: string;
    alternativeText: string;
    caption: unknown;
    width: number;
    heigh: number;
    formats: { thumbnail: ImFormat; medium: ImFormat; small: ImFormat };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string;
    provider: string;
    provider_metadata: string;
    createdAt: Date;
    updatedAt: Date;
  };
};
