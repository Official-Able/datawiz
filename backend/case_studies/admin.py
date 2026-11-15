from django.contrib import admin
from django.utils.html import format_html
from .models import Campaign, CaseStudy


@admin.register(CaseStudy)
class CaseStudyAdmin(admin.ModelAdmin):
    list_display = ("title", "sector", "review_status", "is_published", "is_featured", "sort_order", "updated_at")
    list_filter = ("is_published", "is_featured", "sector")
    list_editable = ("sort_order",)
    search_fields = ("title", "summary", "work_done")
    prepopulated_fields = {"slug": ("title",)}
    readonly_fields = ("campaign_preview", "created_at", "updated_at")
    fieldsets = (
        ("Project", {"fields": ("title", "slug", "sector", "summary", "work_done", "outcome")}),
        ("Media and links", {"fields": ("cover_image_url", "project_url")}),
        ("Publishing", {"fields": ("is_published", "is_featured", "sort_order")}),
        ("History", {"fields": ("created_at", "updated_at")}),
    )

    @admin.display(description="Editorial review")
    def review_status(self, obj):
        missing = [label for label, value in (
            ("image", obj.cover_image_url),
            ("scope", obj.work_done),
            ("outcome", obj.outcome),
        ) if not value]
        if missing:
            return format_html('<span class="review-needed">Add {}</span>', ", ".join(missing))
        return format_html('<span class="review-ready">Ready to review</span>')


@admin.register(Campaign)
class CampaignAdmin(admin.ModelAdmin):
    list_display = ("title", "placement", "starts_at", "ends_at", "is_published", "priority", "updated_at")
    list_filter = ("is_published", "placement")
    list_editable = ("is_published", "priority")
    search_fields = ("title", "eyebrow", "message")
    readonly_fields = ("created_at", "updated_at")
    fieldsets = (
        ("Campaign content", {"fields": ("title", "eyebrow", "message", "image_url")}),
        ("Optional action", {"fields": ("cta_label", "cta_url")}),
        ("Schedule and placement", {"fields": ("placement", "starts_at", "ends_at", "priority", "is_published")}),
        ("Preview", {"fields": ("campaign_preview",)}),
        ("History", {"fields": ("created_at", "updated_at")}),
    )

    @admin.display(description="Content preview")
    def campaign_preview(self, obj):
        if not obj:
            return "Save the campaign to preview its content."
        return format_html(
            '<strong>{}</strong><br><span>{}</span>',
            obj.eyebrow or obj.title,
            obj.message,
        )
