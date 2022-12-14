/*
* This file was generated by a tool.
* Rerun sql-ts to regenerate this file.
*/
export interface FileEntity {
  'created_at'?: Date;
  'id'?: string;
  'is_private'?: boolean;
  'mime_type_id': string;
  'sha_256_hash': string;
  'updated_at'?: Date;
}
export interface FileTagEntity {
  'created_at'?: Date;
  'file_id': string;
  'id'?: string;
  'tag_id': string;
  'updated_at'?: Date;
}
export interface MimeTypeEntity {
  'created_at'?: Date;
  'ext': string;
  'id'?: string;
  'updated_at'?: Date;
  'value': string;
}
export interface TagEntity {
  'created_at'?: Date;
  'description'?: string | null;
  'id'?: string;
  'parent_id'?: string | null;
  'title': string;
  'updated_at'?: Date;
}
